const { Octokit } = require("@octokit/action");
const fs = require("fs");

const octokit = new Octokit();

const repoUrl = process.env.GIT_REPOSITORY_URL;
// Start after "git@github.com:" and omit ".git" from the end
const repoPath = repoUrl.substring(15, repoUrl.length - 4);
const [repoOwner, repoName] = repoPath.split("/");
const tagName = process.env.GIT_TAG;
const releaseDescription = 'XR Simulation Environments version ' + tagName;
const tgzFileName = repoName + '-' + tagName + '.tgz';
const tgzPath = 'upm-ci~/packages/' + tgzFileName;

console.log('Creating release with tgz at ' + tgzPath);

async function createRelease() {
	const createReleaseResult = await octokit.request('POST /repos/{owner}/{repo}/releases', {
		owner: repoOwner,
		repo: repoName,
		tag_name: tagName,
		name: tagName,
		body: releaseDescription,
		draft: false,
		prerelease: false,
		generate_release_notes: false
	});
	
	var data = fs.readFileSync(tgzPath);
	const uploadURL = createReleaseResult.data.upload_url;
	const uploadResult = await octokit.request('POST ' + uploadURL, {
		name: tgzFileName,
		label: tgzFileName,
		data
	});
}

createRelease();
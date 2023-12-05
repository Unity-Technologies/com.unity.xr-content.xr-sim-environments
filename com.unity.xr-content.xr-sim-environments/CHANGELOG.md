# Changelog

All notable changes to this package will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.0.1] - 2023-12-04

### Fixed

- Fixed an issue in the Museum environment where Simulated Tracked Images in the environment were not serialized with `MeshRenderer` and `MeshFilter` components, causing warnings when this environment was imported for the first time.

## [2.0.0] - 2023-11-15

### Changed

- Changed all environments to now include a `SimulatedLight` component on all lights. This enables support for AR Foundation's light estimation feature.

## [2.0.0-pre.1] - 2023-10-20

### Changed

- Changed the AR Foundation dependency version to 6.0.
- Changed the minimum Unity version to 2022.3, as required by AR Foundation 6.0.
- Changed the Billboard_City environment to remove Quad GameObjects associated with each Simulated Tracked Image that are no longer necessary with AR Foundation 6.0, and fixed related issues with Transforms of Simulated Tracked Image GameObjects.

## [1.0.0] - 2022-10-19

### Changed

- Bumped package version to 1.0.0

## [1.0.0-pre.2] - 2022-05-26

### Added

- Added package documentation.
- Added dependency on AR Foundation 5.0.0-pre.12.

## [1.0.0-pre.1] - 2022-04-19

### Added

- Initial version of XR Simulation Environments

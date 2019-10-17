# @bgoodman/video-preview

## Installation

> Requires [ffmpeg](https://www.ffmpeg.org/).
>
> You may already have it; check via `ffmpeg -version`

```javascript
npm install @bgoodman/video-preview

yarn add @bgoodman/video-preview
```

## Usage

```javascript
import videoPreview from "@bgoodman/video-preview"
```

## API

**videoPreview**(`input`: string, `output`: string, `duration`: number, {`overwrite`?: boolean}): *Promise<{output: string, stdout: string, stderr: string}>*

Saves a slice of video to file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | filepath of input video. |
`output` | string | filepath of preview. |
`duration` | number | duration (sec.) of preview.  |
`overwrite` | boolean | replaces `output` if file exists. |

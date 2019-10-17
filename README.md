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

### `videoPreview`

**videoPreview**(`input`: string, `output`: string, opts?: VideoPreviewOptions): *Promise<{output: string, stdout: string, stderr: string}>*

Saves a slice of video to file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | filepath of input video. |
`output` | string | filepath of preview. |

**Options:**

Name | Default | Description |
------ | ------ | ------ |
`overwrite` | true | overwrite output file if exists.
`duration` | 5 | specify length of preview (seconds)
`scale.width` | -1 | set x-axis scale (px).  Default leaves output unchanged.
`scale.height`| -2 | set y-axis scale (px).  Default preserves aspect ratio, rounding to a factor of 2.

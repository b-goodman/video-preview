[video-preview](../README.md) › ["videoFrame"](_videoframe_.md)

# External module: "videoFrame"

## Index

### Functions

* [videoFrameSequence](_videoframe_.md#const-videoframesequence)

## Functions

### `Const` videoFrameSequence

▸ **videoFrameSequence**(`input`: string, `output`: string, `fps`: number): *Promise‹string›*

*Defined in [videoFrame.ts:28](https://github.com/b-goodman/video-preview/blob/9f0084e/src/videoFrame.ts#L28)*

Extracts a single frame from a video at a specified time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | filepath of input video. |
`output` | string | filepath for generated frame. |
`fps` | number | - |

**Returns:** *Promise‹string›*

filepath of generated frame.

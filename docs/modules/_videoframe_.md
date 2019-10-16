[video-preview](../README.md) › ["videoFrame"](_videoframe_.md)

# External module: "videoFrame"

## Index

### Functions

* [videoFrame](_videoframe_.md#const-videoframe)
* [videoFrameSequence](_videoframe_.md#const-videoframesequence)

## Functions

### `Const` videoFrame

▸ **videoFrame**(`input`: string, `output`: string, `time?`: undefined | number): *Promise‹string›*

*Defined in [videoFrame.ts:15](https://github.com/b-goodman/video-preview/blob/33df2b5/src/videoFrame.ts#L15)*

Extracts a single frame from a video at a specified time or at 00:00:00 if a time is not given.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | filepath of input video. |
`output` | string | filepath for generated frame. |
`time?` | undefined &#124; number | - |

**Returns:** *Promise‹string›*

filepath of generated frame.

___

### `Const` videoFrameSequence

▸ **videoFrameSequence**(`input`: string, `output`: string, `fps`: number): *Promise‹string›*

*Defined in [videoFrame.ts:31](https://github.com/b-goodman/video-preview/blob/33df2b5/src/videoFrame.ts#L31)*

Extracts a single frame from a video at a specified time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | filepath of input video. |
`output` | string | filepath for generated frame. |
`fps` | number | - |

**Returns:** *Promise‹string›*

filepath of generated frame.

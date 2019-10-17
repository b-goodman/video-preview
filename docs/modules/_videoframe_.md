[video-preview](../README.md) › ["videoFrame"](_videoframe_.md)

# External module: "videoFrame"

## Index

### Functions

* [videoFrame](_videoframe_.md#const-videoframe)

## Functions

### `Const` videoFrame

▸ **videoFrame**(`input`: string, `output`: string, `time?`: undefined | number, `opts?`: undefined | object): *Promise‹unknown›*

*Defined in [videoFrame.ts:12](https://github.com/b-goodman/video-preview/blob/55b5772/src/videoFrame.ts#L12)*

Extracts a single frame from a video at a specified time or at 00:00:00 if a time is not given.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | filepath of input video. |
`output` | string | filepath for generated frame. |
`time?` | undefined &#124; number | - |
`opts?` | undefined &#124; object | - |

**Returns:** *Promise‹unknown›*

filepath of generated frame.

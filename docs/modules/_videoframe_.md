[video-preview](../README.md) › ["videoFrame"](_videoframe_.md)

# External module: "videoFrame"

## Index

### Variables

* [exec](_videoframe_.md#const-exec)

### Functions

* [videoFrame](_videoframe_.md#const-videoframe)
* [videoFrameSequence](_videoframe_.md#const-videoframesequence)

## Variables

### `Const` exec

• **exec**: *Function* =  util.promisify(require('child_process').exec)

Defined in videoFrame.ts:3

## Functions

### `Const` videoFrame

▸ **videoFrame**(`input`: string, `output`: string, `time?`: undefined | number): *Promise‹string›*

Defined in videoFrame.ts:12

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

Defined in videoFrame.ts:28

Extracts a single frame from a video at a specified time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | filepath of input video. |
`output` | string | filepath for generated frame. |
`fps` | number | - |

**Returns:** *Promise‹string›*

filepath of generated frame.

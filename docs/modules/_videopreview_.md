[video-preview](../README.md) › ["videoPreview"](_videopreview_.md)

# External module: "videoPreview"

## Index

### Variables

* [exec](_videopreview_.md#const-exec)

### Functions

* [videoPreview](_videopreview_.md#const-videopreview)

## Variables

### `Const` exec

• **exec**: *Function* =  util.promisify(require('child_process').exec)

Defined in videoPreview.ts:3

## Functions

### `Const` videoPreview

▸ **videoPreview**(`input`: string, `output`: string, `duration`: number): *Promise‹string›*

Defined in videoPreview.ts:11

Saves a slice of video to file.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | filepath of input video. |
`output` | string | filepath of preview. |
`duration` | number | duration (sec.) of preview.  |

**Returns:** *Promise‹string›*

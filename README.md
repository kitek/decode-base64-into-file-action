# decode-base64-info-file-action

Decode base64 value and save it into a file. It might be useful in cases when we need to restore a file with credentials from [Secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets).

## Inputs

### `encoded-value`

**Required** Encoded value with base64.

### `destination-file`

**Required** Path for destination file. All non-existing directories will be created recursively.

## Example usage

```
- name: Restore firebase.json file
	uses: kitek/decode-base64-into-file-action@v1  
	with:
		encoded-value: ${{ secrets.WEB_FIREBASE_JSON }}
		destination-file: firebase.json
```

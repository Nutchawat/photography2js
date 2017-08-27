let mockerJson = require('src/workI/api/mocker.json')
let galleryGenerator = require('src/galleryGenerator')

export const mocker = {
  workI () {
    return galleryGenerator.generateFolderImages(mockerJson)
  },
  workIDetail (folderName) {
    return galleryGenerator.generateDetailImages(mockerJson, folderName)
  }
}

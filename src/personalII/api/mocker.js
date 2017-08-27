let mockerJson = require('src/personalII/api/mocker.json')
let galleryGenerator = require('src/galleryGenerator')

export const mocker = {
  personalII () {
    return galleryGenerator.generateFolderImages(mockerJson)
  },
  personalIIDetail (folderName) {
    return galleryGenerator.generateDetailImages(mockerJson, folderName)
  }
}

let mockerJson = require('src/personalI/api/personalI.json')
let galleryGenerator = require('src/galleryGenerator')

export const mocker = {
  personalI () {
    return galleryGenerator.generateFolderImages(mockerJson)
  },
  personalIDetail (folderName) {
    return galleryGenerator.generateDetailImages(mockerJson, folderName)
  }
}

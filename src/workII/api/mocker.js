let mockerJson = require('src/../static/img/workII.json')
let galleryGenerator = require('src/galleryGenerator')

export const mocker = {
  workII () {
    return galleryGenerator.generateFolderImages(mockerJson)
  },
  workIIDetail (folderName) {
    return galleryGenerator.generateDetailImages(mockerJson, folderName)
  }
}

let mockerJson = require('src/../static/img/workI.json')
let galleryGenerator = require('src/galleryGenerator')

export const mocker = {
  workI () {
    return galleryGenerator.generateFolderImages(mockerJson)
  },
  workIDetail (folderName) {
    return galleryGenerator.generateDetailImages(mockerJson, folderName)
  }
}

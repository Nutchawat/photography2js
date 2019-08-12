let mockerJson = require('src/../static/img/workIII.json')
let galleryGenerator = require('src/galleryGenerator')

export const mocker = {
  workIII () {
    return galleryGenerator.generateFolderImages(mockerJson)
  },
  workIIIDetail (folderName) {
    return galleryGenerator.generateDetailImages(mockerJson, folderName)
  }
}

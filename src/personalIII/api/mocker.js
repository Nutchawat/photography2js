let mockerJson = require('src/../static/img/personalIII.json')
let galleryGenerator = require('src/galleryGenerator')

export const mocker = {
  personalIII () {
    return galleryGenerator.generateFolderImages(mockerJson)
  },
  personalIIIDetail (folderName) {
    return galleryGenerator.generateDetailImages(mockerJson, folderName)
  }
}

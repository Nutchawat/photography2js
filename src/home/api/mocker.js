let config = require('src/../env')
let imagePath = config.defaultBaseURL + config.baseImagePath
let galleryGenerator = require('src/galleryGenerator')

export const mocker = {
  home () {
    let folders = [ 'personalI', 'personalII', 'workI', 'workII' ]
    let mockHome = []
    for (let folder of folders) {
      let jsonFolderImage = require('src/' + folder + '/api/' + folder + '.json')
      for (let subFolder of jsonFolderImage.subFolder) {
        let isHomePathImages = subFolder.images.filter((image) => {
          return image.isHome
        }).map((isHomeImage) => {
          return {
            name: imagePath + jsonFolderImage.folderName + '/' + subFolder.folderName + '/' + isHomeImage.name,
            subFolder: subFolder.folderName,
            folder: jsonFolderImage.folderName
          }
        })
        mockHome = isHomePathImages.length > 0 ? mockHome.concat(isHomePathImages) : mockHome
      }
    }
    return mockHome.sort(() => {
      return 0.5 - Math.random()
    })
  },
  homeDetail ({ folder, subFolder }) {
    let mockerJson = require('src/' + folder + '/api/' + folder + '.json')
    return galleryGenerator.generateDetailImages(mockerJson, subFolder)
  }
}

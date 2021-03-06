let config = require('src/../env')
var location = window.location
var baseURL = (process.env.NODE_ENV !== 'development') ? location.protocol + '//' + location.host + '/' : config.defaultBaseURL
const baseImgPath = baseURL + config.baseImagePath

module.exports = {
  generateFolderImages (mockerJson) {
    let folder = mockerJson.folderName
    let mockerIndex = []
    let ratio = 1
    for (let subFolder of mockerJson.subFolder) {
      for (let image of subFolder.images) {
        if (typeof image.isSelect !== 'undefined') {
          if (image.isSelect) {
            if (image.display === 'W') {
              ratio = 1.3082437276
            } else if (image.display === 'W2') {
              ratio = 1.3082437276
            } else if (image.display === 'H') {
              ratio = 0.76438356164
            } else if (image.display === 'H2') {
              ratio = 0.76438356164
            } else {
              ratio = 0.76438356164
            }
            /*
            let img = document.createElement('img')
            img.src = baseImgPath + folder + '/' + subFolder.folderName + '/' + image.name
            ratio = img.width / img.height
            */
            mockerIndex.push({
              src: baseImgPath + folder + '/' + subFolder.folderName + '/' + image.name,
              ratio: ratio,
              folder: subFolder.folderName
            })
            break
          }
        }
      }
    }
    return mockerIndex
  },
  generateDetailImages (mockerJson, folderName) {
    let mockerDetail = []
    let ratio = 1
    for (let subFolder of mockerJson.subFolder) {
      if (subFolder.folderName === folderName) {
        for (let image of subFolder.images) {
          if (image.display === 'W') {
            ratio = 1.3082437276
          } else if (image.display === 'W2') {
            ratio = 1.3082437276
          } else if (image.display === 'H') {
            ratio = 0.76438356164
          } else if (image.display === 'H2') {
            ratio = 0.76438356164
          } else {
            ratio = 0.76438356164
          }
          mockerDetail.push({
            src: baseImgPath + mockerJson.folderName + '/' + folderName + '/' + image.name,
            ratio: ratio
          })
        }
        break
      }
    }
    return mockerDetail
  }
}


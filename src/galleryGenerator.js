let config = require('src/../env')
const baseImgPath = config.defaultBaseURL + config.baseImagePath

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
              ratio = 1.5047879616963065
            } else if (image.display === 'H') {
              ratio = 0.6645454545454546
            }
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
            ratio = 1.5047879616963065
          } else if (image.display === 'H') {
            ratio = 0.6645454545454546
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


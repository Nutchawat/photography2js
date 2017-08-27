const baseImgPath = '/static/img/PersonalI/'

export const mocker = {
  personalI () {
    return [{
      src: baseImgPath + '1_YUKA/1_MG_3791_1.jpg',
      ratio: 1.5047879616963065,
      folder: '1_YUKA'
    }, {
      src: baseImgPath + '2_Maryna_white/1_MG_5426_1.jpg',
      ratio: 0.6645454545454546,
      folder: '2_Maryna_white'
    }, {
      src: baseImgPath + '3_Anna_WhiteWindow/1_MG_7507_1.jpg',
      ratio: 0.6645454545454546,
      folder: '3_Anna_WhiteWindow'
    }, {
      src: baseImgPath + '4_PolinaFlower/1_MG_0775_1.jpg',
      ratio: 0.6645454545454546,
      folder: '4_PolinaFlower'
    }, {
      src: baseImgPath + '5_Haruna/1_MG_2815_1.jpg',
      ratio: 0.6645454545454546,
      folder: '5_Haruna'
    }, {
      src: baseImgPath + '6_YokoyamaGREY/1_MG_0863.jpg',
      ratio: 0.6645454545454546,
      folder: '6_YokoyamaGREY'
    }, {
      src: baseImgPath + '7_HarunaGREY/_MG_2540_1.jpg',
      ratio: 1.5049157303370786,
      folder: '7_HarunaGREY'
    }, {
      src: baseImgPath + '8_Georgia_Grey/1_MG_4222_1.jpg',
      ratio: 0.6645454545454546,
      folder: '8_Georgia_Grey'
    }, {
      src: baseImgPath + '9_Maryna_ColorPaper/1_MG_5071_1.jpg',
      ratio: 0.6645454545454546,
      folder: '9_Maryna_ColorPaper'
    }, {
      src: baseImgPath + '10_Haruna_colorpaper/_MG_2660.jpg',
      ratio: 1.5047879616963065,
      folder: '10_Haruna_colorpaper'
    }, {
      src: baseImgPath + '11_Peter/P1.jpg',
      ratio: 0.6645454545454546,
      folder: '11_Peter'
    }, {
      src: baseImgPath + '12_Thibaut/THI1.jpg',
      ratio: 0.6645454545454546,
      folder: '12_Thibaut'
    }, {
      src: baseImgPath + '13_Chris/Chris_1.jpg',
      ratio: 0.6645454545454546,
      folder: '13_Chris'
    }, {
      src: baseImgPath + '14_Tick/_MG_0492.jpg',
      ratio: 1.5047879616963065,
      folder: '14_Tick'
    }, {
      src: baseImgPath + '15_Movement/1_N4A1421PR_1.jpg',
      ratio: 0.6645454545454546,
      folder: '15_Movement'
    }, {
      src: baseImgPath + '16_Ohtake/_MG_8465Vol1.jpg',
      ratio: 1.5047879616963065,
      folder: '16_Ohtake'
    }, {
      src: baseImgPath + '17_Jay/1_MG_0764PR_1.jpg',
      ratio: 0.6645454545454546,
      folder: '17_Jay'
    }, {
      src: baseImgPath + '18_Joy/Joy_1.jpg',
      ratio: 0.6645454545454546,
      folder: '18_Joy'
    }, {
      src: baseImgPath + '19_Naomi/1_MG_2253GG_2.jpg',
      ratio: 0.664813343923749,
      folder: '19_Naomi'
    }, {
      src: baseImgPath + '20_Maryna_TwoColor/_MG_5206.jpg',
      ratio: 0.6645454545454546,
      folder: '20_Maryna_TwoColor'
    }, {
      src: baseImgPath + '21_Anna_Backpaper/1_MG_7810_1.jpg',
      ratio: 0.6645454545454546,
      folder: '21_Anna_Backpaper'
    }, {
      src: baseImgPath + '22_Yokoyama2way/_MG_0379.jpg',
      ratio: 1.5047879616963065,
      folder: '22_Yokoyama2way'
    }, {
      src: baseImgPath + '23_Aya/1_MG_9579_1.jpg',
      ratio: 0.6645454545454546,
      folder: '23_Aya'
    }, {
      src: baseImgPath + '24_Saya/_MG_2946.jpg',
      ratio: 1.5058179329226558,
      folder: '24_Saya'
    }, {
      src: baseImgPath + '25_Noonc2/_MG_5739.jpg',
      ratio: 0.6645454545454546,
      folder: '25_Noonc2'
    }, {
      src: baseImgPath + '26_Noonc1/1_Duo1_1.jpg',
      ratio: 0.6645454545454546,
      folder: '26_Noonc1'
    }, {
      src: baseImgPath + '27_yokoyama_location/1_MG_0591_1.jpg',
      ratio: 0.6645454545454546,
      folder: '27_yokoyama_location'
    }, {
      src: baseImgPath + '28_Georgia_Location/1_MG_4496_1.jpg',
      ratio: 1.5058179329226558,
      folder: '28_Georgia_Location'
    }, {
      src: baseImgPath + '29_Baifern/1_MG_3947_1.jpg',
      ratio: 0.6645454545454546,
      folder: '29_Baifern'
    }, {
      src: baseImgPath + '30_SatoRiho/SR1.jpg',
      ratio: 1.5058179329226558,
      folder: '30_SatoRiho'
    }, {
      src: baseImgPath + '31_Nishikawa/1_MG_5810.jpg',
      ratio: 1.5058179329226558,
      folder: '31_Nishikawa'
    }, {
      src: baseImgPath + '32_Yokoyama_Grey/1_MG_1129_1.jpg',
      ratio: 0.6645454545454546,
      folder: '32_Yokoyama_Grey'
    }, {
      src: baseImgPath + '33_Anna_Blackwindow/1_MG_7056_1.jpg',
      ratio: 0.6645454545454546,
      folder: '33_Anna_Blackwindow'
    }, {
      src: baseImgPath + '34_Weddingdress/1_MG_5891_1.jpg',
      ratio: 0.6645454545454546,
      folder: '34_Weddingdress'
    }]
  },
  personalIDetail (folder) {
    let personalIDetail = [[{}]]
    switch (folder) {
      case '1_YUKA':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_3791_1.jpg',
          ratio: 1.5047879616963065
        }, {
          src: baseImgPath + folder + '/' + '2_MG_3885_2.jpg',
          ratio: 1.5047879616963065
        }, {
          src: baseImgPath + folder + '/' + '3_MG_3997_3.jpg',
          ratio: 1.5047879616963065
        }, {
          src: baseImgPath + folder + '/' + '4_MG_4361_4.jpg',
          ratio: 1.5047879616963065
        }, {
          src: baseImgPath + folder + '/' + '5_MG_4165_5.jpg',
          ratio: 1.5047879616963065
        }, {
          src: baseImgPath + folder + '/' + '6_MG_4265_6.jpg',
          ratio: 1.5047879616963065
        }, {
          src: baseImgPath + folder + '/' + '7_MG_4215_Big7.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '2_Maryna_white':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_5426_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_5393_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_MG_5283_3.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '4_MG_5321_4.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '3_Anna_WhiteWindow':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_7507_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_7408_2.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '4_PolinaFlower':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_0775_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_0163_2.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '5_Haruna':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_2815_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_2831_2.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '6_YokoyamaGREY':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_0863.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_0927.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '7_HarunaGREY':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '_MG_2540_1.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '8_Georgia_Grey':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_4222_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_4076_2.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '9_Maryna_ColorPaper':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_5071_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_5017_2.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '10_Haruna_colorpaper':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '_MG_2660.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '11_Peter':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + 'P1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'P2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'P3.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'P4.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '12_Thibaut':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + 'THI1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'THI2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'THI3.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'THI4.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '13_Chris':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + 'Chris_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'Chris_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'Chris_3.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'Chris_4.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '14_Tick':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '_MG_0492.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '15_Movement':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_N4A1421PR_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_N4A1447PR_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_NS1_3.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '16_Ohtake':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '_MG_8465Vol1.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '17_Jay':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_0764PR_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_0809PR_2.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '18_Joy':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + 'Joy_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'Joy_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + 'Joy_3.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '19_Naomi':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_2253GG_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_2493GG_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_MG_1977_3.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '20_Maryna_TwoColor':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '_MG_5206.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '21_Anna_Backpaper':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_7810_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_7623_2.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '22_Yokoyama2way':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '_MG_0379.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '23_Aya':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_9579_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_9142_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_MG_9296Longleg_3.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '4_MG_9918_4.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '24_Saya':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '_MG_2946.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '25_Noonc2':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '_MG_5739.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '26_Noonc1':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_Duo1_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_JN_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_NN_3.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '4_Jlay_4.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '27_yokoyama_location':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_0591_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_0596_2.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '28_Georgia_Location':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_4496_1.jpg',
          ratio: 1.5049157303370786
        }, {
          src: baseImgPath + folder + '/' + '2_MG_4293_2.jpg',
          ratio: 1.5049157303370786
        }, {
          src: baseImgPath + folder + '/' + '3_MG_4515_3.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '29_Baifern':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_3947_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_3775_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_MG_3475_3.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '4_MG_3643_4.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '5_MG_2605_5.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '6_MG_2657_6.jpg',
          ratio: 1.5049157303370786
        }, {
          src: baseImgPath + folder + '/' + '7_MG_3006_7.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '30_SatoRiho':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + 'SR1.jpg',
          ratio: 1.5049157303370786
        }, {
          src: baseImgPath + folder + '/' + 'SR2.jpg',
          ratio: 1.5049157303370786
        }]
        break
      case '31_Nishikawa':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_5810.jpg',
          ratio: 1.5049157303370786
        }, {
          src: baseImgPath + folder + '/' + '2_MG_5874.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_MG_5694BW.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '32_Yokoyama_Grey':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_1129_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_1069_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_MG_1308_3.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '4_MG_1278_4.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '33_Anna_Blackwindow':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_7056_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_7179_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_MG_6961-2_3.jpg',
          ratio: 0.6645454545454546
        }]
        break
      case '34_Weddingdress':
        personalIDetail = [{
          src: baseImgPath + folder + '/' + '1_MG_5891_1.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '2_MG_5809_2.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '3_MG_5804_3.jpg',
          ratio: 0.6645454545454546
        }, {
          src: baseImgPath + folder + '/' + '4_MG_5689_4.jpg',
          ratio: 0.6645454545454546
        }]
        break
    }
    return personalIDetail
  }
}

module.exports = {
  version: '2.2.2',
  logoMini: 'PPS',
  header: 'Peopleplus',
  subHeader: 'Human Resource Management System',
  loginLabel: 'Login',
  defaultLang: 'th',
  allLang: ['en', 'th'],
  showConn: true,
  windowWidth: 0,
  windowHeight: 0,
  pcWidth: 769,
  baseConn: {
    user: 'ESS_STA3',
    db: 'HR12C'
  },
  loginMessageError: {
    en: {
      ERROR: 'System Error',
      TIMEOUT: 'Login time was expired',
      LICENSE: 'User entrance is limited',
      PERMIT: 'User permission failed'
    },
    th: {
      ERROR: 'ระบบเกิดข้อผิดพลาด',
      TIMEOUT: 'ช่วงเวลาเชื่อมต่อระบบสิ้นสุดลง',
      LICENSE: 'ผู้เข้าใช้งานเกินกำหนด',
      PERMIT: 'ผู้เข้าใช้งานไม่มีสิทธิใช้งานฟังก์ชันนี้'
    }
  },
  fontIcon: {
    'request': 'fa-pencil',
    'report': 'fa-file-text',
    'approve': 'fa-pencil-square-o',
    'dashboard': 'fa-dashboard'
  },
  mainMenu: {
    'en': 'Main Menu',
    'th': 'เมนูหลัก'
  },
  menuRequest: {
    'en': 'Employee Self-Service',
    'th': 'บริการข้อมูลด้วยตนเอง'
  },
  menuApprove: {
    'en': 'Manager Self-Service',
    'th': 'ข้อมูลสำหรับผู้บริหาร'
  },
  menu: {
    'request': {
      'en': 'Request Menu',
      'th': 'เมนูบันทึก'
    },
    'report': {
      'en': 'Report Menu',
      'th': 'เมนูรายงาน'
    },
    'approve': {
      'en': 'Approve Menu',
      'th': 'เมนูอนุมัติ'
    },
    'dashboard': {
      'en': 'Dashboard',
      'th': 'Dashboard'
    }
  },
  hres81x: {
    en: {
      'currency': 'Currency',
      'net_pay': 'Net pay',
      'net_pay_by_currency': 'Net pay by currency',
      'no_data_found': 'No data found',
      'btn_search': 'Search'
    },
    th: {
      'currency': 'สกุลเงิน',
      'net_pay': 'ยอดสุทธิสำหรับสกุลเงิน',
      'net_pay_by_currency': 'ยอดสุทธิสำหรับงวดนี้',
      'no_data_found': 'ไม่พบข้อมูล',
      'btn_search': 'ค้นหา'
    }
  },
  home: {
    en: {
      'warningmsg': 'Warning Message',
      'activity': 'Self Planner',
      'contact': 'Employee Directory',
      'knowledge': 'General Knowledge',
      'poll': 'Survey Form'
    },
    th: {
      'warningmsg': 'ข้อความแจ้งเตือน',
      'activity': 'กิจกรรม',
      'contact': 'รายชื่อผู้ติดต่อ',
      'knowledge': 'ความรู้ทั่วไป',
      'poll': 'แบบสอบถาม'
    }
  },
  button: {
    en: {
      save: 'Save',
      approve: 'Confirm',
      back: 'Back',
      search: 'Search',
      select: 'Select',
      edit: 'Edit',
      cancel: 'Cancel',
      delete: 'Delete',
      add: 'Add',
      detail: 'Detail',
      clear: 'Clear',
      sendmail: 'Sendmail',
      view: 'View',
      process: 'Process',
      ok: 'Ok',
      book: 'Book'
    },
    th: {
      save: 'บันทึก',
      approve: 'ยืนยัน',
      back: 'ย้อนกลับ',
      search: 'ค้นหา',
      select: 'เลือก',
      edit: 'แก้ไข',
      cancel: 'ยกเลิก',
      delete: 'ลบ',
      add: 'เพิ่ม',
      detail: 'รายละเอียด',
      clear: 'คืนค่า',
      sendmail: 'ส่งอีเมล์',
      view: 'ดูรายการ',
      process: 'Process',
      ok: 'ตกลง',
      book: 'จอง'
    }
  },
  days: {
    en: [ 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr' ],
    th: [ 'ส', 'อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ' ]
  },
  month: {
    en: [{
      full: 'January',
      short: 'Jan'
    }, {
      full: 'February',
      short: 'Feb'
    }, {
      full: 'March',
      short: 'Mar'
    }, {
      full: 'April',
      short: 'Apr'
    }, {
      full: 'May',
      short: 'May'
    }, {
      full: 'June',
      short: 'Jun'
    }, {
      full: 'July',
      short: 'Jul'
    }, {
      full: 'August',
      short: 'Aug'
    }, {
      full: 'September',
      short: 'Sep'
    }, {
      full: 'October',
      short: 'Oct'
    }, {
      full: 'November',
      short: 'Nov'
    }, {
      full: 'December',
      short: 'Dec'
    }],
    th: [{
      full: 'มกราคม',
      short: 'ม.ค.'
    }, {
      full: 'กุมภาพันธ์',
      short: 'ก.พ.'
    }, {
      full: 'มีนาคม',
      short: 'มี.ค.'
    }, {
      full: 'เมษายน',
      short: 'เม.ย.'
    }, {
      full: 'พฤษภาคม',
      short: 'พ.ค.'
    }, {
      full: 'มิถุนายน',
      short: 'มิ.ย.'
    }, {
      full: 'กรกฏาคม',
      short: 'ก.ค.'
    }, {
      full: 'สิงหาคม',
      short: 'ส.ค.'
    }, {
      full: 'กันยายน',
      short: 'ก.ย.'
    }, {
      full: 'ตุลาคม',
      short: 'ต.ค.'
    }, {
      full: 'พฤศจิกายน',
      short: 'พ.ย.'
    }, {
      full: 'ธันวาคม',
      short: 'ธ.ค.'
    }]
  },
  statusApprove: {
    en: {
      P: 'Pending',
      A: 'Approved',
      N: 'Rejected'
    },
    th: {
      P: 'รอพิจารณา',
      A: 'อนุมัติ',
      N: 'ไม่อนุมัติ'
    }
  },
  period: {
    en: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10'
    },
    th: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10'
    }
  },
  mockPostMessage: {
    response: 'success'
  },
  replaceLabelToColumns (columns, labels, dropdowns) {
    let columnArrs = []
    for (var columnIndex = 0; columnIndex < columns.length; columnIndex++) {
      let column = Object.assign({}, columns[columnIndex])
      if (typeof dropdowns === 'object' && typeof column['inlineDropdown'] !== 'undefined') {
        for (var dropdownIndex = 0; dropdownIndex < dropdowns.length; dropdownIndex++) {
          var key = (typeof dropdowns[dropdownIndex].key !== 'undefined') ? dropdowns[dropdownIndex].key : ''
          if (column.key === key) {
            column['inlineDropdown'] = dropdowns[dropdownIndex]['value']
          }
        }
      }
      let codapp = (typeof column['labelCodapp'] !== 'undefined') ? column['labelCodapp'] : ''
      let numseq = (typeof column['labelIndex'] !== 'undefined') ? column['labelIndex'] : ''
      if (typeof labels[codapp] !== 'undefined') {
        if (typeof labels[codapp][numseq] !== 'undefined') {
          column['name'] = labels[codapp][numseq]
        } else {
          column['name'] = 'L[' + codapp + '][' + numseq + ']'
        }
      } else {
        column['name'] = 'L[' + codapp + '][' + numseq + ']'
      }
      // delete column['labelCodapp']
      // delete column['labelIndex']
      columnArrs.push(column)
    }
    return columnArrs
  },
  getCurrentUserHeader () {
    const user = JSON.parse(window.localStorage.getItem('currentUser'))
    const lang = window.localStorage.getItem('lang')
    let currentUser = {}

    if (user !== null && lang !== null) {
      let pLang = '102'
      switch (lang) {
        case 'en':
          pLang = '101'
          break
        case 'th':
          pLang = '102'
          break
        default:
          pLang = '102'
          break
      }
      currentUser = {
        p_lrunning: user.p_lrunning,
        p_coduser: user.p_coduser,
        p_codpswd: user.p_codpswd,
        p_codempid: user.p_codempid,
        p_lang: pLang,
        login_status: user.status
      }
    }

    return JSON.stringify(currentUser)
  }
}
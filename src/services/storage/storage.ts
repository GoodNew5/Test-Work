// @ts-nocheck
/* to check localStorage */
const TEST_DATA_KEY = 'local_storage_test_data_key'

class Storage {
  constructor() {
    this.isLocalStorageSupported = this.checkLocalStorageSupport()
  }

  checkLocalStorageSupport = () => {
    try {
      const localStorage = window?.localStorage
      if (localStorage) {
        const testDataKey = TEST_DATA_KEY
        let isAvailable = true
        localStorage.setItem(testDataKey, testDataKey)
        if (localStorage.getItem(testDataKey) !== testDataKey) {
          isAvailable = false
        }
        localStorage.removeItem(testDataKey)
        return isAvailable
      }
      return false
    } catch (error) {
      return false
    }
  }

  /**
   * Cookies can be set with an “expiry date” that is given in seconds
   */
  setValueToCookies = (name, value, cookiesOptions) => {
    const { days = null } = cookiesOptions

    let expiryDateString = ''
    if (days !== null) {
      const expiryDate = new Date()
      expiryDate.setDate(expiryDate.getDate() + days)
      /**
       * ;expires=date-in-GMTString-format
       * Date.toUTCString() for help formatting this value
       * since Date.toGMTString() is depricated
       */
      expiryDateString = `; expires=${expiryDate.toUTCString()}`
    }
    document.cookie = `${name}=${value}${expiryDateString}; path=/`
  }

  getValueFromCookies = (name) => {
    const nameString = `${name}=`
    const temp = document.cookie.split(';')
    for (let i = 0, l = temp.length; i < l; i++) {
      let c = temp[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameString) === 0) {
        const dataValue = c.substring(nameString.length, c.length)
        return dataValue
      }
    }
    return null
  }

  removeValueFromCookies = (name) => {
    this.set(name, '', -1)
  }

  /**
   * pass optional cookiesOptions object
   * {
   *  days?: number
   * }
   */
  set(name, value, cookiesOptions = null) {
    if (this.isLocalStorageSupported && !cookiesOptions) {
      localStorage.setItem(name, JSON.stringify(value))
    } else {
      this.setValueToCookies(name, value, cookiesOptions)
    }
  }

  get(name, cookiesOptions = null || false) {
    let dataValue = null
    if (this.isLocalStorageSupported && !cookiesOptions) {
      dataValue = localStorage.getItem(name)
    } else {
      dataValue = this.getValueFromCookies(name, cookiesOptions)
    }
    try {
      return JSON.parse(dataValue)
    } catch (error) {
      return dataValue
    }
  }

  /**
   * if empty localStorage returns null and cookies returns ''
   */
  remove(name, cookiesOptions = null || false) {
    if (this.isLocalStorageSupported && !cookiesOptions) {
      localStorage.removeItem(name)
    } else {
      this.removeValueFromCookies(name, cookiesOptions)
    }
  }
}

/* single instance: this class is only created once during the application life-cycle */
const storage = new Storage()

export { storage }

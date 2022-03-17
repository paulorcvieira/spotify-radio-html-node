import fs from 'fs'
import fsPromises from 'fs/promises'
import { extname, join } from 'path'
import config from './config.js'

const { dir: { publicDirectory } } = config

export class Service {
  createFileStream(filename) {
    return fs.createReadStream(filename)
  }

  async getFileInfo(file) {
    // file = home/index.html
    const fullFilePath = join(publicDirectory, file)
    // valida se existe, se não existe retorna erro!!
    await fsPromises.access(fullFilePath)
    const fileType = extname(fullFilePath)

    return {
      type: fileType,
      name: fullFilePath
    }
  }

  async getFileStream(file) {
    const { name, type } = await this.getFileInfo(file)

    return {
      stream: this.createFileStream(name),
      type
    }
  }
}
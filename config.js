// config.js
export default {
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'cosmic-js-chat',
    type_slug: 'messages',
    read_key: process.env.COSMIC_READ_KEY,
    write_key: process.env.COSMIC_WRITE_KEY
  }
}

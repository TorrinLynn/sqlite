exports.createSchemaCustomization = ({ actions, schema }) => {
    actions.createTypes([
        `
      type SqliteBands implements Node @dontInfer {
        uuid: String!
        name: String!
        image: File @fileByRelativePath
      }
      `,
    ])
}
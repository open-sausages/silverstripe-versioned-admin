export interface GraphQLResultSet<DataObject> {
  pageInfo: {
    totalCount: number,
  },
  edges: ({
    node: DataObject,
  })[],
}

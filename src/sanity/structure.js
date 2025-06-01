export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('artwork').title('Artwork'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['artwork'].includes(item.getId())
      ),
    ])
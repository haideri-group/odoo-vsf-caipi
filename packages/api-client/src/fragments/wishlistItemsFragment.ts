export default `
wishlistItems {
    id
    product {
      id
      name
      description
      image
      price
      isInWishlist
      firstVariant {
        id
      }
      slug
    }
  }
`;

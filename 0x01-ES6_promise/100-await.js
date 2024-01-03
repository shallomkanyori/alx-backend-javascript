import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  await createUser().then((user) => {
    res.user = user;
    return uploadPhoto();
  })
    .then((photo) => { res.photo = photo; })
    .catch(() => { res = { user: null, photo: null }; });

  return res;
}

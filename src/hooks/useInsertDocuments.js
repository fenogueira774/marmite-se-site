import {storage} from '../firebase/config'
import { ref, listAll, getDownloadURL, uploadBytes} from "firebase/storage"

//Lê os arquivos do firestorage
export const getAll = async () => {
  const list = [];

  const marmitasFolder = ref(storage, "marmitas");
  const marmitasList = await listAll(marmitasFolder)


for (let i in marmitasList.items) {
  let imageUrl = await getDownloadURL(marmitasList.items[i])
  list.push({
    name: marmitasList.items[i].name,
    url: imageUrl
  })
}

  return list;
};

//Envia arquivos para o firestorage para a posta marmitas

export const insert = async (file, fileName) => {
  if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {


const newFile =ref(storage, `marmitas/${fileName}`)
const upload = await uploadBytes(newFile, file)
const imageUrl = await getDownloadURL(upload.ref)
return {
  name: upload.ref.name,
  url:imageUrl
}

  } else {
    return new Error("Tipo de arquivo não permitido")
  }
}

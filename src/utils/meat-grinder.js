//arguments: file - plaintext file
//return value:encrypted file
function encryptWtihAes(plainTextFile) {}
//arguments: encrypted file
//return value: array of (x,y) coordinates
function encryptWithShamirs(encryptedFile) {}
//arguments:array points needed to reconstruct encryptedFile
//return value: array of new (x,y) coordinates
function hashPointsWithPrivateKey(arrayOfPoints) {}
//argument: array of (x,y) coordinates
//return value: Promise that resolves to an array of IPFS Hashe's
async function submitPointsToIPFS(points) {}

async function saveToVault(plainTextFile) {
  let points = hashPointsWithPrivateKey(
    encryptWithShamirs(encryptWithAes(plainTextFile))
  );
  let ipfsHashes = await submitPointsToIPFS(points);
  return ipfsHashes;
}

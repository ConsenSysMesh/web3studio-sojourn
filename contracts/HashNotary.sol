pragma solidity ^0.4.24;

/**
* @title A persistor of hashes per user with timestamps
*/
contract HashNotary {
  /**
  * @notice Storage of hashes. Stored as Sender => (Hash => Timestamp)
  */
  mapping(address => mapping(uint => uint)) public hashes;

  /**
  * @notice Saves the hash of a content
  *
  * @param contentHash - 256bit hash of some content
  */
  function save(uint contentHash) public {
    hashes[msg.sender][contentHash] = block.timestamp;
  }

  /**
  * @notice Fetches the block timestamp for when a hash was saved
  *
  * @param contentHash - 256bit hash of some content
  * @return timestamp as seconds since unix epoch
  */
  function getTimestamp (uint contentHash) public view returns(uint) {
    return hashes[msg.sender][contentHash];
  }
}

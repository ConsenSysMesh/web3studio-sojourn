pragma solidity ^0.4.24;

contract HashPersistor {
  // sender => (hash => timestamp)
  mapping(address => mapping(uint => uint)) public hashes;

  function save(uint contentHash) public {
    hashes[msg.sender][contentHash] = block.timestamp;
  }

  function getTimestamp (uint contentHash) public view returns(uint) {
    return hashes[msg.sender][contentHash];
  }
}

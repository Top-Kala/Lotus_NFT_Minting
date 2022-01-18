//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Lotus is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
    mapping(address => uint256) public mintedCount;

    address public owner = payable(0x604438a13871E28CABADE19C42F173f6aeCfe2cA);

    constructor() ERC721("LOTUS Token", "LOTUS") {}

    function createToken(string memory tokenURI)
        public
        payable
        returns (uint256)
    {
        mintedCount[msg.sender]++;
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        uint256 amount = address(this).balance;
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");

        return newItemId;
    }
}

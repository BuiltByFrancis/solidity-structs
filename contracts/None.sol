// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract None {
    uint256 public a;
    uint256 public b;
    uint256 public c;
    uint256 public d;

    constructor() {
        a = 1;
        b = 1;
        c = 1;
        d = 1;
    }

    function incrementSingle() external {
        unchecked {
            ++a;
        }
    }

    function incrementAll() external {
        unchecked {
            ++a;
            ++b;
            ++c;
            ++d;
        }
    }
}
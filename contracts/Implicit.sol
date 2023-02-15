// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Implicit {
    uint64 public a;
    uint64 public b;
    uint64 public c;
    uint64 public d;

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
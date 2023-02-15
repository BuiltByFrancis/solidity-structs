// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Explicit {
    struct Data {
        uint64 a;
        uint64 b;
        uint64 c;
        uint64 d;
    }

    Data public data;

    constructor() {
        data = Data(1,1,1,1);
    }

    function incrementSingle() external {
        unchecked {
            ++data.a;
        }
    }

    function incrementAll() external {
        Data memory _data = data;
        unchecked {
            ++_data.a;
            ++_data.b;
            ++_data.c;
            ++_data.d;
        }
        data = _data;
    }
}
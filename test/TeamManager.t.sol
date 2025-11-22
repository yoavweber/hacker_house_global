pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/TeamManager.sol";

contract TeamManagerTest is Test {
    TeamManager tm;

    function setUp() public {
        tm = new TeamManager();
    }

    function testCreateTeam() public {
        uint256 id = tm.createTeam();
        assertEq(id, 1);
        assertEq(tm.teamOwner(id), address(this));
    }
}
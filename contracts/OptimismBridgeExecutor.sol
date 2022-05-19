// SPDX-License-Identifier: AGPL-3.0
pragma solidity 0.8.10;

import {ICrossDomainMessenger} from './interfaces/ICrossDomainMessenger.sol';
import {L2BridgeExecutor} from './L2BridgeExecutor.sol';

contract OptimismBridgeExecutor is L2BridgeExecutor {
  address public immutable OVM_L2_CROSS_DOMAIN_MESSENGER;

  modifier onlyEthereumGovernanceExecutor() override {
    if (
      msg.sender != OVM_L2_CROSS_DOMAIN_MESSENGER ||
      ICrossDomainMessenger(OVM_L2_CROSS_DOMAIN_MESSENGER).xDomainMessageSender() !=
      _ethereumGovernanceExecutor
    ) revert UnauthorizedEthereumExecutor();
    _;
  }

  constructor(
    address ovmL2CrossDomainMessenger,
    address ethereumGovernanceExecutor,
    uint256 delay,
    uint256 gracePeriod,
    uint256 minimumDelay,
    uint256 maximumDelay,
    address guardian
  )
    L2BridgeExecutor(
      ethereumGovernanceExecutor,
      delay,
      gracePeriod,
      minimumDelay,
      maximumDelay,
      guardian
    )
  {
    OVM_L2_CROSS_DOMAIN_MESSENGER = ovmL2CrossDomainMessenger;
  }
}

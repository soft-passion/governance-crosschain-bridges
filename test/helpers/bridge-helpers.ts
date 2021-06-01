import { DRE } from '../../helpers/misc-utils';
import { BigNumber } from 'ethers';
import { ProposalActions, TestEnv } from './make-suite';

export const createActionHash = (
  proposalIndex: number,
  actionIndex: number,
  expectedExecutionTime: number,
  testEnv: TestEnv
): string => {
  const { ethers } = DRE;
  const proposalActions = testEnv.proposalActions[proposalIndex];
  const { targets, values, signatures, calldatas, withDelegatecalls } = proposalActions;
  return ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(
      ['address', 'uint256', 'string', 'bytes', 'uint256', 'bool'],
      [
        targets[actionIndex],
        values[actionIndex],
        signatures[actionIndex],
        calldatas[actionIndex],
        expectedExecutionTime,
        withDelegatecalls[actionIndex],
      ]
    )
  );
};

export const createBridgeTest1 = async (
  dummyUint: number,
  dummyString: string,
  testEnv: TestEnv
): Promise<ProposalActions> => {
  const { ethers } = DRE;
  const { polygonMarketUpdate, bridgeExecutor } = testEnv;
  const proposalActions = new ProposalActions();

  // push the first transaction fields into action arrays
  const encodedNumber = ethers.utils.defaultAbiCoder.encode(['uint256'], [dummyUint]);
  proposalActions.targets.push(polygonMarketUpdate.address);
  proposalActions.values.push(BigNumber.from(100));
  proposalActions.signatures.push('execute(uint256)');
  proposalActions.calldatas.push(encodedNumber);
  proposalActions.withDelegatecalls.push(false);

  // push the second transaction fields into action arrays
  const encodedBytes = ethers.utils.defaultAbiCoder.encode(
    ['bytes32'],
    [ethers.utils.formatBytes32String(dummyString)]
  );
  proposalActions.targets.push(polygonMarketUpdate.address);
  proposalActions.values.push(BigNumber.from(0));
  proposalActions.signatures.push('executeWithDelegate(bytes32)');
  proposalActions.calldatas.push(encodedBytes);
  proposalActions.withDelegatecalls.push(true);

  proposalActions.encodedActions = ethers.utils.defaultAbiCoder.encode(
    ['address[]', 'uint256[]', 'string[]', 'bytes[]', 'bool[]'],
    [
      proposalActions.targets,
      proposalActions.values,
      proposalActions.signatures,
      proposalActions.calldatas,
      proposalActions.withDelegatecalls,
    ]
  );

  proposalActions.encodedRootCalldata = ethers.utils.defaultAbiCoder.encode(
    ['address', 'bytes'],
    [bridgeExecutor.address, proposalActions.encodedActions]
  );

  return proposalActions;
};

export const createBridgeTest2 = async (testEnv: TestEnv): Promise<ProposalActions> => {
  const { ethers } = DRE;
  const { polygonMarketUpdate, bridgeExecutor } = testEnv;
  const proposalActions = new ProposalActions();

  // push the first transaction fields into action arrays
  const encodedData = ethers.utils.defaultAbiCoder.encode(['bytes'], [0]);
  proposalActions.targets.push(polygonMarketUpdate.address);
  proposalActions.values.push(BigNumber.from(0));
  proposalActions.signatures.push('');
  proposalActions.calldatas.push(encodedData);
  proposalActions.withDelegatecalls.push(false);

  proposalActions.encodedActions = ethers.utils.defaultAbiCoder.encode(
    ['address[]', 'uint256[]', 'string[]', 'bytes[]', 'bool[]'],
    [
      proposalActions.targets,
      proposalActions.values,
      proposalActions.signatures,
      proposalActions.calldatas,
      proposalActions.withDelegatecalls,
    ]
  );

  proposalActions.encodedRootCalldata = ethers.utils.defaultAbiCoder.encode(
    ['address', 'bytes'],
    [bridgeExecutor.address, proposalActions.encodedActions]
  );

  return proposalActions;
};

export const createBridgeTest3 = async (
  dummyUint: number,
  testEnv: TestEnv
): Promise<ProposalActions> => {
  const { ethers } = DRE;
  const { polygonMarketUpdate, bridgeExecutor } = testEnv;
  const proposalActions = new ProposalActions();

  // push the first transaction fields into action arrays
  const encodedNumber = ethers.utils.defaultAbiCoder.encode(['uint256'], [dummyUint]);
  proposalActions.targets.push(polygonMarketUpdate.address);
  proposalActions.values.push(BigNumber.from(50));
  proposalActions.signatures.push('execute(uint256)');
  proposalActions.calldatas.push(encodedNumber);
  proposalActions.withDelegatecalls.push(true);

  proposalActions.encodedActions = ethers.utils.defaultAbiCoder.encode(
    ['address[]', 'uint256[]', 'string[]', 'bytes[]', 'bool[]'],
    [
      proposalActions.targets,
      proposalActions.values,
      proposalActions.signatures,
      proposalActions.calldatas,
      proposalActions.withDelegatecalls,
    ]
  );

  proposalActions.encodedRootCalldata = ethers.utils.defaultAbiCoder.encode(
    ['address', 'bytes'],
    [bridgeExecutor.address, proposalActions.encodedActions]
  );

  return proposalActions;
};

export const createBridgeTest4 = async (
  dummyUint: number,
  testEnv: TestEnv
): Promise<ProposalActions> => {
  const { ethers } = DRE;
  const { polygonMarketUpdate, bridgeExecutor } = testEnv;
  const proposalActions = new ProposalActions();

  // push the first transaction fields into action arrays
  const encodedNumber = ethers.utils.defaultAbiCoder.encode(['uint256'], [dummyUint]);
  proposalActions.targets.push(polygonMarketUpdate.address);
  proposalActions.values.push(BigNumber.from(99));
  proposalActions.signatures.push('execute(uint256)');
  proposalActions.calldatas.push(encodedNumber);
  proposalActions.withDelegatecalls.push(false);

  proposalActions.encodedActions = ethers.utils.defaultAbiCoder.encode(
    ['address[]', 'uint256[]', 'string[]', 'bytes[]', 'bool[]'],
    [
      proposalActions.targets,
      proposalActions.values,
      proposalActions.signatures,
      proposalActions.calldatas,
      proposalActions.withDelegatecalls,
    ]
  );

  proposalActions.encodedRootCalldata = ethers.utils.defaultAbiCoder.encode(
    ['address', 'bytes'],
    [bridgeExecutor.address, proposalActions.encodedActions]
  );

  return proposalActions;
};

export const createBridgeTest5 = async (
  dummyUint: number,
  testEnv: TestEnv
): Promise<ProposalActions> => {
  const { ethers } = DRE;
  const { polygonMarketUpdate, bridgeExecutor } = testEnv;
  const proposalActions = new ProposalActions();

  // push the first transaction fields into action arrays
  const encodedNumber = ethers.utils.defaultAbiCoder.encode(['uint256'], [dummyUint]);
  proposalActions.targets.push(polygonMarketUpdate.address);
  proposalActions.values.push(BigNumber.from(98));
  proposalActions.signatures.push('execute(uint256)');
  proposalActions.calldatas.push(encodedNumber);
  proposalActions.withDelegatecalls.push(false);

  proposalActions.encodedActions = ethers.utils.defaultAbiCoder.encode(
    ['address[]', 'uint256[]', 'string[]', 'bytes[]', 'bool[]'],
    [
      proposalActions.targets,
      proposalActions.values,
      proposalActions.signatures,
      proposalActions.calldatas,
      proposalActions.withDelegatecalls,
    ]
  );

  proposalActions.encodedRootCalldata = ethers.utils.defaultAbiCoder.encode(
    ['address', 'bytes'],
    [bridgeExecutor.address, proposalActions.encodedActions]
  );

  return proposalActions;
};

export const createBridgeTest6 = async (testEnv: TestEnv): Promise<ProposalActions> => {
  const { ethers } = DRE;
  const { bridgeExecutor } = testEnv;
  const proposalActions = new ProposalActions();

  // push the first transaction fields into action arrays
  const encodedData = ethers.utils.defaultAbiCoder.encode(['bytes'], [0]);
  proposalActions.values.push(BigNumber.from(0));
  proposalActions.signatures.push('');
  proposalActions.calldatas.push(encodedData);
  proposalActions.withDelegatecalls.push(false);

  proposalActions.encodedActions = ethers.utils.defaultAbiCoder.encode(
    ['address[]', 'uint256[]', 'string[]', 'bytes[]', 'bool[]'],
    [
      proposalActions.targets,
      proposalActions.values,
      proposalActions.signatures,
      proposalActions.calldatas,
      proposalActions.withDelegatecalls,
    ]
  );

  proposalActions.encodedRootCalldata = ethers.utils.defaultAbiCoder.encode(
    ['address', 'bytes'],
    [bridgeExecutor.address, proposalActions.encodedActions]
  );

  return proposalActions;
};

export const createBridgeTest7 = async (testEnv: TestEnv): Promise<ProposalActions> => {
  const { ethers } = DRE;
  const { polygonMarketUpdate, bridgeExecutor } = testEnv;
  const proposalActions = new ProposalActions();

  // push the first transaction fields into action arrays
  const encodedData = ethers.utils.defaultAbiCoder.encode(['bytes'], [0]);
  proposalActions.targets.push(polygonMarketUpdate.address);
  proposalActions.values.push(BigNumber.from(0));
  proposalActions.values.push(BigNumber.from(100));
  proposalActions.signatures.push('');
  proposalActions.calldatas.push(encodedData);
  proposalActions.withDelegatecalls.push(false);

  proposalActions.encodedActions = ethers.utils.defaultAbiCoder.encode(
    ['address[]', 'uint256[]', 'string[]', 'bytes[]', 'bool[]'],
    [
      proposalActions.targets,
      proposalActions.values,
      proposalActions.signatures,
      proposalActions.calldatas,
      proposalActions.withDelegatecalls,
    ]
  );

  proposalActions.encodedRootCalldata = ethers.utils.defaultAbiCoder.encode(
    ['address', 'bytes'],
    [bridgeExecutor.address, proposalActions.encodedActions]
  );

  return proposalActions;
};

export const createBridgeTest8 = async (
  dummyUint: number,
  testEnv: TestEnv
): Promise<ProposalActions> => {
  const { ethers } = DRE;
  const { polygonMarketUpdate, bridgeExecutor } = testEnv;
  const proposalActions = new ProposalActions();

  // push the first transaction fields into action arrays
  const encodedNumber = ethers.utils.defaultAbiCoder.encode(['uint256'], [dummyUint]);
  proposalActions.targets.push(polygonMarketUpdate.address);
  proposalActions.values.push(BigNumber.from(100));
  proposalActions.signatures.push('execute(uint256)');
  proposalActions.calldatas.push(encodedNumber);
  proposalActions.withDelegatecalls.push(false);

  // push the second transaction fields into action arrays -- duplicate of the first
  proposalActions.targets.push(polygonMarketUpdate.address);
  proposalActions.values.push(BigNumber.from(100));
  proposalActions.signatures.push('execute(uint256)');
  proposalActions.calldatas.push(encodedNumber);
  proposalActions.withDelegatecalls.push(false);

  proposalActions.encodedActions = ethers.utils.defaultAbiCoder.encode(
    ['address[]', 'uint256[]', 'string[]', 'bytes[]', 'bool[]'],
    [
      proposalActions.targets,
      proposalActions.values,
      proposalActions.signatures,
      proposalActions.calldatas,
      proposalActions.withDelegatecalls,
    ]
  );

  proposalActions.encodedRootCalldata = ethers.utils.defaultAbiCoder.encode(
    ['address', 'bytes'],
    [bridgeExecutor.address, proposalActions.encodedActions]
  );

  return proposalActions;
};

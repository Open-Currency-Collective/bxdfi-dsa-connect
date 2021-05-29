import { AbiItem } from 'web3-utils'

// @ts-ignore
export const accountM1: AbiItem[] = [{"inputs":[{"internalType":"address","name":"_connectors","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"origin","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"string[]","name":"targetsNames","type":"string[]"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"string[]","name":"eventNames","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"eventParams","type":"bytes[]"}],"name":"LogCast","type":"event"},{"inputs":[{"internalType":"string[]","name":"_targetNames","type":"string[]"},{"internalType":"bytes[]","name":"_datas","type":"bytes[]"},{"internalType":"address","name":"_origin","type":"address"}],"name":"cast","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"connectorsM1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
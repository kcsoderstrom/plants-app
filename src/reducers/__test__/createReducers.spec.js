import { expect } from 'chai';
import {mocha} from 'mocha';
import { createReducers } from '../index';

const constants = {
    USER: 'user',
    COMMENT: 'comment'
}

const UPDATE_NAME_ACTION = 'update_name_action';

const reducerConfigs = {
    testConfig: {
        state: { name: 'test'},
        actions: {
            [UPDATE_NAME_ACTION]: (state, action) => {
                return { ...state, name: action.data}
            }
        }
    }
}

let createdReducers = null;

describe('createReducers', () => {
    createdReducers = createReducers(reducerConfigs, constants);

    it ('should have keys for reducers', () => {
        expect(Object.keys(createdReducers)).to.deep.equal(['user', 'comment', 'testConfig'])
    })

    it('should create a working reducer', () => {
        expect(createdReducers.testConfig(undefined, {})).to.deep.equal(
                {
                    name: 'test',
                }
            )
          expect(createdReducers.testConfig({}, {
                    type: UPDATE_NAME_ACTION,
                    data: 'works'
                })
                ).to.deep.equal(
                    {
                        name: 'works',
                    }
                )

    })

    describe('should create user reducers from constants with defulat actions to', () => {
        let USER_CREATE_OR_UPDATE = 'USER_CREATE_OR_UPDATE'
        let USER_DELETE= 'USER_DELETE';

        let recordsBefore = [
            {
                id: 1,
                name: 'I am one'
            },
            {
                id: 2,
                name: 'I am two'
            },
            {
                id: 3,
                name: 'I am three'
            }
        ]
        let recordsAfter = {
            1: {
                id: 1,
                name: 'I am one'
            },
            2: {
                id: 2,
                name: 'I am two'
            },
            3: {
                id: 3,
                name: 'I am three'
            }
        }
        it('create records object keyed by id from an array', () => {
             expect(createdReducers.user({}, {
                    type: USER_CREATE_OR_UPDATE,
                    data: recordsBefore
                })
                ).to.deep.equal(recordsAfter)
        })
        
        it('update records object keyed by id from an array', () => {
            const newRecords = [
                {
                    id: 4,
                    name: 'I am Four'
                },
                {
                    id: 5,
                    name: 'I am Five'
                }
            ]

            const recordAfterNewRecord = {
                ...recordsAfter,
                4: {
                    id: 4,
                    name: 'I am Four'
                },
                5: {
                    id: 5,
                    name: 'I am Five'
                }
            }
             expect(createdReducers.user(recordsAfter, {
                    type: USER_CREATE_OR_UPDATE,
                    data: newRecords
                })
                ).to.deep.equal(recordAfterNewRecord)
        })

        it ('create record from one object', () => {
            const newRecord = {
                id: 4,
                name: 'I am four'
            }

            const recordAfterNewRecord = {
                ...recordsAfter,
                4: {
                    id: 4,
                    name: 'I am four'
                }
            }
            expect(createdReducers.user(recordsAfter, {
                    type: USER_CREATE_OR_UPDATE,
                    data: newRecord
                })
                ).to.deep.equal(recordAfterNewRecord)
        })

        it ('update a single record from one object with id', () => {
            const newRecord = {
                id: 1,
                name: 'I am one again',
                newKey: 'new key'
            }

            const recordAfterNewRecord = {
                ...recordsAfter,
                1: newRecord
            }

            expect(createdReducers.user(recordsAfter, {
                type: USER_CREATE_OR_UPDATE,
                data: newRecord
            })
            ).to.deep.equal(recordAfterNewRecord)
        })

        it ('craete a single record from one object without an id', () => {
            const record = {
                one: '1',
                two: '2'
            }

             expect(createdReducers.user({}, {
                type: USER_CREATE_OR_UPDATE,
                data: record
            })
            ).to.deep.equal(record)
        })

        it ('update a single record from one object without an id', () => {
            const record = {
                one: '1',
                two: '2',
                three: '3'
            }

            const recordBefore = {
                one: '1',
                two: '2'
            }

             expect(createdReducers.user(recordBefore, {
                type: USER_CREATE_OR_UPDATE,
                data: record
            })
            ).to.deep.equal(record)
        })

        it ('delete several records with ids', () => {
            const deleteRecords = [
                {
                    id: 1,
                    name: 'I am Four'
                },
                {
                    id: 2,
                    name: 'I am Five'
                }
            ]

            const recordAfterDelete = {
                 3: {
                    id: 3,
                    name: 'I am three'
                }
            }
            expect(createdReducers.user(recordsAfter, {
                type: USER_DELETE,
                data: deleteRecords
            })
            ).to.deep.equal(recordAfterDelete)
        })
        it ('delete a single record with an id', () => {
            const recordToDelete = {
                    id: 3,
                    name: 'I am three'
                }

            let recordsAfterDelete = {
                1: {
                    id: 1,
                    name: 'I am one'
                },
                2: {
                    id: 2,
                    name: 'I am two'
                },
            } 

            expect(createdReducers.user(recordsAfter, {
                type: USER_DELETE,
                data: recordToDelete
            })
            ).to.deep.equal(recordsAfterDelete)
        })
        it ('reset if no object is given', () => {
             expect(createdReducers.user(recordsAfter, {
                type: USER_DELETE,
            })
            ).to.deep.equal({})
        })
    })

})

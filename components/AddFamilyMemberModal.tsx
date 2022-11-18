import React, { useState } from 'react'
import { Modal, ModalBody, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import { FormControl, Input, FormLabel, Button } from '@chakra-ui/react'

interface AddFamilyMemberModalProps {
    isOpen: boolean,
    onClose: () => void;
    onSubmit: (familyMemberName: string) => void;
}

const AddFamilyMemberModal: React.FC<AddFamilyMemberModalProps> = ({ isOpen, onClose, onSubmit}) => {

    const [name, setname] = useState('')

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Add family member</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <FormControl>
                        <FormLabel>Family Member</FormLabel>
                        <Input value={name} onChange={e => setname(e.target?.value)} />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button 
                        colorScheme='blue'
                        onClick={() => {
                            onSubmit(name)
                            onClose()
                        }}
                        disabled={!name}
                    >
                        Add
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddFamilyMemberModal
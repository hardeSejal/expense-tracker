import {
    Button, FormControl, FormLabel, Input, Modal, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalBody,
    Radio, RadioGroup
  } from "@chakra-ui/react";
  import React, { useContext } from "react";
  import { GlobalContext } from "../../context";
  
  export default function TransactionForm({ onClose, isOpen }) {
    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);
  
    function handleSubmit(event) {
      event.preventDefault();
      handleFormSubmit(formData);
    }
  
    function handleFormChange(event) {
      setFormData({
        ...formData, [event.target.name]: event.target.value
      });
    }
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input
                  placeholder="Enter Transaction Description"
                  name="description"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.description}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Enter Amount</FormLabel>
                <Input
                  placeholder="Enter Amount"
                  name="amount"
                  type="number"
                  onChange={handleFormChange}
                  value={formData.amount}
                />
              </FormControl>
              <RadioGroup mt={'5'} value={value} onChange={setValue}>
                <Radio  checked={formData.type==='income'} value="income" name="type" colorScheme="blue" onChange={handleFormChange}>Income</Radio>
                <Radio  checked={formData.type==='expense'} value="expense" name="type" colorScheme="red" onChange={handleFormChange}>Expense</Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button mr={'4'} onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} type="submit">Add</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    );
  }
  
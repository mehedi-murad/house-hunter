import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea} from "@nextui-org/react";

const Modals = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')

    // const backdrops = ["opaque", "blur", "transparent"];

    const handleOpen = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    }
    return (
        <div>
            <div className="flex flex-wrap gap-3">
            <Button 
            variant="flat" 
            color="warning" 
            onPress={() => handleOpen()}
            className="capitalize"
          >
           Add New Houses
            </Button> 
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add your House</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="House Name"
                  placeholder="Enter Name"
                  variant="bordered"
                />
                <Input
                  label="Address"
                  placeholder="Enter address"
                  type="text"
                  variant="bordered"
                />
                <Input
                  label="City"
                  placeholder="Enter city name"
                  type="text"
                  variant="bordered"
                />
                <Input
                  label="Bedrooms"
                  placeholder="Enter bedrooms number"
                  type="text"
                  variant="bordered"
                />
                <Input
                  label="Room sizes"
                  placeholder="Enter the size of the room"
                  type="text"
                  variant="bordered"
                />
                <Input
                  label="Image"
                  placeholder="Enter image Url"
                  type="text"
                  variant="bordered"
                />
                <Input
                  label="Available date"
                  placeholder="Availibility"
                  type="date"
                  variant="bordered"
                />
                <Input
                  label="Rent/month"
                  placeholder="Enter the amount"
                  type="text"
                  variant="bordered"
                />
                <Input
                  label="Phone"
                  placeholder="Enter the number"
                  type="text"
                  variant="bordered"
                />
                <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    type="text"
                    variant="bordered"
                    />
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  ADD
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>
    );
};

export default Modals;
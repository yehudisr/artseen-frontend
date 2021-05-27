import {
  Button,
  FormControl,
  Box,
  FormLabel,
  Input,
  Flex,
  Spacer,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function Search({ search, handleSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
      <Box w='30%' p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
              />
              <Input
                boxShadow="base"
                borderRadius="md"
                borderWidth="1px"
                type="text"
                id="search"
                placeholder=" search art events"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </InputGroup>
          </FormControl>
        </form>
      </Box>
  );
}

export default Search;

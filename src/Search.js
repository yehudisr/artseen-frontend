import { Button, FormControl, Box, FormLabel, Input, Flex, Spacer } from "@chakra-ui/react";

function Search({search, handleSearch}){

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
      }


    return(
        <Flex>
             <Box  w="300px" p={4}> 
            <form onSubmit={handleSubmit}>
                <FormControl id="email">
                <Input type="text"
                id="search"
                placeholder="search art events"
                value={search}
                onChange={(e) => handleSearch(e.target.value)} />
                </FormControl> 
            </form>
            </Box>
        </Flex>
    )
}

export default Search;
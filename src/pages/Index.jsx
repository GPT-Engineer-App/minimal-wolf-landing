import { Container, Text, VStack, Button, Heading, Image, IconButton } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to GoWolf
        </Heading>
        <Image src="https://images.unsplash.com/photo-1594319622332-8507b850f10a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwbG9nb3xlbnwwfHx8fDE3MTc2NjcwMjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="GoWolf Logo" boxSize="150px" />
        <Text fontSize="lg" textAlign="center">
          Empowering your business with innovative solutions.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;

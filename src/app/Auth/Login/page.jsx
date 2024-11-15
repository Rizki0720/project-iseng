'use client'
import { Box, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text, Image } from "@chakra-ui/react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import NextLink from "next/link";

export default function Login() {
  return (
    <Box bg="gray.50" minH="100vh" display="flex" justifyContent="center" alignItems="center">
    <Container maxW="md" p={6} bg="white" boxShadow="lg" borderRadius="md">
      <Flex direction={{ base: "column", md: "row" }} align="center">
        {/* Left Section */}
        <Box flex={1} textAlign="center" mb={{ base: 6, md: 0 }} mr={{ md: 4 }}>
          <Image src="" alt="Logo" mx="auto" />
        </Box>

        {/* Right Section */}
        <Box flex={1}>
          <Heading as="h1" mb={4} fontSize="2xl" textAlign="center">
            Sign In
          </Heading>
          <Text mb={6} textAlign="center" color="gray.600">
            Enter your email address and password to access the admin panel.
          </Text>

          <form >
            <Stack spacing={4}>
              {/* Email Input */}
             

              {/* Remember Me and Submit */}
              <Flex justify="space-between" align="center">
                <Checkbox id="remember-me">Remember Me</Checkbox>
                <Button colorScheme="blue" type="submit">
                  Sign In
                </Button>
              </Flex>
            </Stack>
          </form>

          <Text mt={6} textAlign="center" fontSize="sm" color="gray.600">
            Don&apos;t have an account?{" "}
            <Link as={NextLink} href="/sign-up" color="blue.500">
              Sign up
            </Link>
          </Text>

          {/* Social Media Links */}
          <Flex justify="center" mt={4}>
            <Link as={NextLink} href="#" mx={2}>
              <i className="ri-facebook-box-line" />
            </Link>
            <Link as={NextLink} href="#" mx={2}>
              <i className="ri-twitter-line" />
            </Link>
            <Link as={NextLink} href="#" mx={2}>
              <i className="ri-instagram-line" />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  </Box>
  );
}

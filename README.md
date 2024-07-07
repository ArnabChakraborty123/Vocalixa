# Vocalixa
A text-to-speech converter using Amazon Polly

![Screenshot 2024-07-03 214212](https://github.com/ArnabChakraborty123/Vocalixa/assets/98545064/f64789b1-cbda-4b55-b233-b79c1e2f3381)
![Screenshot 2024-07-07 114246](https://github.com/ArnabChakraborty123/Vocalixa/assets/98545064/3b470943-8b28-4ed5-82ae-b338e6d4c899)

## Overview
Vocalixa is a text-to-speech converter built using Next.js and Amazon Polly. The application leverages AWS IAM for secure access and features an outstanding user interface.

## Features
- Convert text to speech using Amazon Polly.
- Real-time conversion with playback support.
- Intuitive and visually appealing user interface.

## Technologies Used
- **Next.js**: A React framework for building server-side rendered applications.
- **Amazon Polly**: A service that turns text into lifelike speech.
- **AWS IAM**: Securely manage access to AWS services and resources.

## Getting Started

### Prerequisites
- Node.js
- AWS account with access to Amazon Polly and IAM permissions

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArnabChakraborty123/Vocalixa.git
   cd Vocalixa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your environment variables:**
   Create a `.env` file in the root directory and add your AWS credentials and region.
   ```
   NEXT_PUBLIC_REGION=your-aws-region
   NEXT_PUBLIC_CLIENT_ID=your-aws-access-key-id
   NEXT_PUBLIC_SECRET_ACCESS_KEY=your-aws-secret-access-key
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Enter the text** you want to convert to speech in the provided textarea.
2. **Click the convert button** to generate the speech.
3. **Listen** to the generated audio directly within the application.
4.**Download** the audio directly in your pc
Feel free to adjust any part of this README as necessary!

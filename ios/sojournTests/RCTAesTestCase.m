//
// RCTAesTestCase.m
//  sojournTests
//
//  Created by Hadas Zeilberger on 10/16/18.
//  Copyright © 2018 Facebook. All rights reserved.
//
//aes unit tests
#import <XCTest/XCTest.h>
#import <React/RCTBridgeModule.h>
#import "RCTBridgeTestCase.h"
#import <RCTAes/RCTAes.h>
@interface RCTAesTestCase : RCTBridgeTestCase

@end

@implementation RCTAesTestCase


-(NSString *)moduleName
{
  return @"RCTAesTests";
}
-(NSArray<id<RCTBridgeModule>> *)bridgeModules{
  RCTAes *aes = [RCTAes alloc];
  return @[aes];
}
- (void)setup {
  [super setup];
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
}

- (void)testExample {
    // This is an example of a functional test case.
    // Use XCTAssert and related functions to verify your tests produce the correct results.
}

- (void)testPerformanceExample {
    // This is an example of a performance test case.
    [self measureBlock:^{
        // Put the code you want to measure the h of here.
    }];
}

@end

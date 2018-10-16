//
//  RCTBridgeTestCase.m
//  sojournTests
//
//  Created by Hadas Zeilberger on 10/15/18.
//  Copyright © 2018 Facebook. All rights reserved.
//
//entry point for unit tests

#import "RCTBridgeTestCase.h"
#define CURRENT_METHOD _cmd


@implementation RCTBridgeTestCase{
  RCTTestRunner *_runner;
}

- (void)setUp {
  [super setUp];
  //load the component that contains all tests - nativetests.js in this case
  _runner = RCTInitRunnerForApp(@"nativetests",[self moduleProvider],@"http://localhost:8080");
  _runner.recordMode = NO;<#(nonnull NSString *)#>
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (NSArray<id<RCTBridgeModule>> *(^)(void))moduleProvider
{
  NSArray *bridges = self.bridgeModules;
  
  if (bridges && bridges.count > 0) {
    return ^() {
      return bridges;
    };
  }
  
  return nil;
}

- (void)runTest:(SEL)selector
{
  [self runTest:selector timeout:self.timeout];
}

- (void)runTest:(SEL)selector timeout:(NSTimeInterval)timeout
{
  NSString *name = self.moduleName;
  if (name) {
    NSDictionary *dict = @{
                           @"testName": NSStringFromSelector(selector),
                           @"testTimeout": @(timeout)
                           };
    
    [_runner runTest:_cmd module:name initialProps:dict configurationBlock:nil];
  }
  else {
    @throw [NSException exceptionWithName:@"exception"
                                   reason:@"missing module"
                                 userInfo:nil];
  }
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
        // Put the code you want to measure the time of here.
    }];
}

@end

//
//  RCTBridgeTestCase.h
//  sojournTests
//
//  Created by Hadas Zeilberger on 10/16/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#ifndef RCTBridgeTestCase_h
#define RCTBridgeTestCase_h

#import <XCTest/XCTest.h>
#import <React/RCTBridgeModule.h>
#import <RCTTest/RCTTestRunner.h>
#define CURRENT_METHOD _cmd

@interface RCTBridgeTestCase : XCTestCase

@property (nonatomic, strong, readonly, nonnull) NSString *moduleName;
@property (nonatomic,strong,readonly,nullable) NSArray<id<RCTBridgeModule>> *bridgeModules;
@property (nonatomic, assign, readonly) NSTimeInterval timeout;

- (void)runTest:(nonnull SEL)selector;
- (void)runTest:(nonnull SEL)selector timeout:(NSTimeInterval)timeout;
- (void) setup;

@end
#endif /* RCTBridgeTestCase_h */
